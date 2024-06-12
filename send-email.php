<?php
  // Set the email address and subject
  $email = "ginny34800@gmail.com";
  $subject = "Chapter Review Feedback";

  // Get the form data
  $name = $_POST['name'];
  $note = $_POST['note'];
  $character1 = $_POST['character'];
  $character2 = $_POST['character'];
  $justify_info = $_POST['extra'];

  // Create the email body
  $body = "Name: $name\n";
  $body .= "Note: $note\n";
  $body .= "Character 1: $character1\n";
  $body .= "Character 2: $character2\n";
  $body .= "Justify info: $justify_info\n";

  // Send the email using PHP's mail function
  mail($email, $subject, $body, "From: Chapter Review Feedback");

?>
