<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $dsn = 'mysql:host=localhost;dbname=to-do';
  $db = new PDO($dsn, 'root', 'root');

  $stmt = $db->prepare("INSERT INTO request (name, email, subject, message) VALUES (:name, :email, :subject, :message)");
  $stmt->bindValue(':name', $name);
  $stmt->bindValue(':email', $email);
  $stmt->bindValue(':subject', $subject);
  $stmt->bindValue(':message', $message);
  $stmt->execute();

?>