<?php
class Connection{
	protected $conn ="";

	public function __construct()
	{
		$this->conn = new mysqli("localhost","root","","react_php_app");
		// $this->conn = new mysqli("localhost","bookhtig_sampatti_online","DSiHu)g1!q&@","bookhtig_sampatti_online");
		// $this->conn = new mysqli("localhost","bookhtig_miracle_technologies","PvB!nAhoba,^","bookhtig_miracle_technologies");
	}

	public function __destruct(){
		$this->conn->close();
	}
}

?>