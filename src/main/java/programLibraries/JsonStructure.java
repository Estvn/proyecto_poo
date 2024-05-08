package programLibraries;

import java.util.List;

public class JsonStructure {
	
	private boolean status;
	private List<List<String>> content;
	private boolean error;
	private String errorMessage;
	
	public JsonStructure(boolean status, List<List<String>> content, boolean error, String errorMessage){
		
		this.status = status;
		this.content = content;
		this.error = error;
		this.errorMessage = errorMessage;
	}
	
	public String getJson() {
		
		StringBuilder json = new StringBuilder("{");
		json.append(String.format("\"status\":%s,", this.status));
		json.append(String.format("\"content\":%s,", this.content));
		json.append(String.format("\"error\":%s,", this.error));
		json.append(String.format("\"errorMessage\":\"%s\"", this.errorMessage));
		json.append("}");

		return json.toString();		
	}
}
