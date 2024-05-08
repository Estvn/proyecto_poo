package programLibraries;

/*
import java.io.FileWriter;
import java.io.PrintWriter;
*/

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * @author estiven.mejia@unah.hn
 * @version 0.1.4
 * @date 2023/12/08
 * 
 */
public class DAOCleanDataModel {
	
	/**
	 * @author estiven.mejia@unah.hn
	 * @version 0.1.2
	 * @date 2023/12/08
	 * 
	 * Método que realiza la limpieza de datos en el archivo .csv y actualiza la fecha de limpieza en el archivo .txt
	 */
	public static void cleanDataModel() {
		
		LocalDateTime actualDate = LocalDateTime.now();
        DateTimeFormatter format = DateTimeFormatter.ofPattern("yyyy-MM-dd-HH-mm-ss");
        String formattedDate = actualDate.format(format);
		DAOWriteDataModel wdm = new DAOWriteDataModel();

		try {
			
			Path currentCsvPath = Paths.get(System.getProperty("user.dir"));
			Path csvArchive = currentCsvPath.resolve(Configuration.CSV_FILE);
			
			Path currentTxtPath = Paths.get(System.getProperty("user.dir"));
			Path txtArchive = currentCsvPath.resolve(Configuration.TXT_FILE);
			
            Files.deleteIfExists(csvArchive);
			Files.createFile(csvArchive);
			
			Files.deleteIfExists(txtArchive);
			Files.createFile(txtArchive);

			FileWriter csvfw = new FileWriter(csvArchive.toFile(), true);			
			BufferedWriter csvbw = new BufferedWriter(csvfw);
			
			FileWriter txtfw = new FileWriter(txtArchive.toFile(), true);
			BufferedWriter txtbw = new BufferedWriter(txtfw);
		
			csvbw.write("");
			wdm.resetCounter(0);
			csvbw.close();
			csvfw.close();

			txtbw.write("ModelCleaningDate"+formattedDate);
			txtbw.close();
			txtfw.close();	
		
		}catch(Exception e) {
			
			e.printStackTrace();
		}
	}
}

