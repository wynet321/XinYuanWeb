<?
function getNewsArray($folder, $seqId) {
	if ($seqId != null && file_exists ( $folder . $seqId . ".txt" )) {
		$fp = fopen ( $folder . $seqId . ".txt", "r" );
		$time = iconv ( "GBK", "UTF-8", fgets ( $fp ) );
		$title = iconv ( "GBK", "UTF-8", fgets ( $fp ) );
		$content = "";
		while ( ! feof ( $fp ) ) {
			$content = $content . iconv ( "GBK", "UTF-8", fgets ( $fp ) ) . "<br>";
		}
		$arrayResult = array (
				"title" => $title,
				"time" => $time,
				"content" => $content
		);
		return $arrayResult;
	} else
		echo "No result!";
}
function getTitleArray($category) {
	for($i = 1; $i < 21; $i ++) {
		if (! file_exists ( "../" . $category . "/" . $i . ".txt" )) {
			file_put_contents ( "../" . $category . "/" . $i . ".txt", "" );
			$newsTitleArray [$i] = "";
		} else {
			$fp = fopen ( "../" . $category . "/" . $i . ".txt", "r" );
			fgets ( $fp );
			$newsTitleArray [$i] = iconv ( "GBK", "UTF-8", fgets ( $fp ) );
			fclose ( $fp );
		}
	}
	return $newsTitleArray;
}