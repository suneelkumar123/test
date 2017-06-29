<script type="text/javascript">
    $(document).ready( function() {
      $('#btnTest').click( function() {
        $.ajax({
          type: "POST", 
          url: "/Login/Test",
          data: { ListID: '1', ItemName: 'test' },
          dataType: "json",
          success: function(response) { alert(response); },
          error: function(xhr, ajaxOptions, thrownError) { alert(xhr.responseText); }
        });
      });
    });
</script>