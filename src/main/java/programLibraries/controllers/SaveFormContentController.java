package programLibraries.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import programLibraries.Configuration;
import programLibraries.DAOReadDataModel;
import programLibraries.DAOWriteDataModel;
import programLibraries.JsonStructure;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Servlet implementation class SaveFormContentController
 */
public class SaveFormContentController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SaveFormContentController() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		response.setContentType("application/json");
		
		List<String> formContentList = new ArrayList<>();
		DAOWriteDataModel wdm = new DAOWriteDataModel();
		
		formContentList.add(request.getParameter(Configuration.EMAIL));
		formContentList.add(request.getParameter(Configuration.YOUTUBE_CHANNEL));
		formContentList.add(request.getParameter(Configuration.DESCRIPTION));
		formContentList.add(request.getParameter(Configuration.VIDEO_TYPE));
		formContentList.add(request.getParameter(Configuration.IFRAME));
		
		wdm.write(formContentList);
		DAOReadDataModel rdm = new DAOReadDataModel();
		
		JsonStructure js = new JsonStructure(true, rdm.read(), false, "null");
		response.getWriter().append(js.getJson());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
