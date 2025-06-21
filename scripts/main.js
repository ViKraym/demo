   
  const hideButton = document.getElementsByClassName('hideButton');
  const myBlock = document.getElementsByClassName('delivery');

  hideButton.addEventListener('click', function() {
    if (myBlock.style.display === 'none') {
      myBlock.style.display = 'block';
    } else {
      myBlock.style.display = 'none';
    }
  });
