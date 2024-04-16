document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      // document ready

    //   alert("hi");

    document.getElementById('overfull').style.display = 'none';

    }
  };


const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;