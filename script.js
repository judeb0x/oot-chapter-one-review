<form action="send_email.php" method="POST">
  <input type="submit" value="Done" onclick="javascript:submitFormAndRedirect(); return false;">
</form>

<script>
  function submitFormAndRedirect() {
    document.querySelector('form').submit();
    window.location.href = 'https://judeb0x.github.io/oot-submit-form/';
  }
</script>