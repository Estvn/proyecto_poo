package programLibraries;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;


/**
 * @author estiven.mejia@unah.hn
 * @version 0.1.1
 * @date 2023/12/05
 * 
 */
public class DAOWriteDataModel {
	
	private static int counter ;
	DAOReadDataModel rdm = new DAOReadDataModel();
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.1
	 * @date 2023/12/04
	 * 
	 * Cada vez que se hace una instancia de esta clase, el contador aumenta en uno.
	 */
	public DAOWriteDataModel() {
		
		this.counter++;
	}
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.1
	 * @date 2023/12/04
	 * 
	 * Resetea el contador de videos ingresados cuando se hace una limpieza de datos.
	 */
	public void resetCounter(int n) {
		
		this.counter = n;
	}
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.1
	 * @date 2023/12/04
	 * 
	 * Método que realiza la escritura de datos en el archivo .csv
	 */
	public void write(List formContent) {
		
		try {
			Path currentPath = Paths.get(System.getProperty("user.dir"));
			Path csvArchive = currentPath.resolve(Configuration.CSV_FILE);
			
     		if (!Files.exists(csvArchive)) {
				Files.createFile(csvArchive);
	        }
			
			FileWriter fw = new FileWriter(csvArchive.toFile(), true);			
			BufferedWriter bw = new BufferedWriter(fw);
					
			StringBuilder result = new StringBuilder();
			
			result.append(this.counter);
			result.append(",");
			
			for(int i=0; i<formContent.size(); i++) {
				
				result.append(formContent.get(i));
				
				if(i == formContent.size()-1) {
					
					result.append("\n");
				}
				else {
					
					result.append(",");
				}
			}
	
			bw.append(result.toString());
			bw.close();
			fw.close();
		
		}catch(Exception e) {
		
			e.printStackTrace();
		}
		
	}

}


