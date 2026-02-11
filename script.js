function openMenu() {
  document.getElementById("sideMenu").style.width = "250px";
}

function closeMenu() {
  document.getElementById("sideMenu").style.width = "0";
}
// New test function
document.getElementById('testBtn').addEventListener('click', function() {
    alert("Vercel update successful! 🚀");
});
