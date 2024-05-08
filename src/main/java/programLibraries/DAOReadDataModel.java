package programLibraries;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

/**
 * @author estiven.mejia@unah.hn
 * @version 0.1.4
 * @date 2023/12/08
 * 
 */
public class DAOReadDataModel {
	
	List<List<String>> csvContent = new ArrayList<>();
	private String csvPath;

	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.4
	 * @date 2023/12/08
	 * 
	 * Realiza una lectura al modelo de datos, y envía la información al JSON.
	 */
	public List<List<String>> read() {
		try {
			Path csvArchive = Paths.get(System.getProperty("user.dir"), Configuration.CSV_FILE);

			FileReader fr = new FileReader(csvArchive.toFile());			
			BufferedReader br = new BufferedReader(fr);			
			String line;
			
			while((line = br.readLine()) != null) {
				List<String> form = new ArrayList<>();
				String[] values = line.split(",");
								
				for(String value : values) {
					form.add(String.format("\"%s\"", value));
				}

				csvContent.add(form);
			}
			
			br.close();
			fr.close();
			return csvContent;
			
		} catch (Exception e) {
			e.printStackTrace();
			csvContent.clear();
		}
		return null;
	}
}
