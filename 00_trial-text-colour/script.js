document.addEventListener("DOMContentLoaded", function () {
    const cursor = document.getElementById("cursor");

    if (!cursor) {
        console.error("Cursor element not found!");
        return;
    }

    document.addEventListener("mousemove", function (e) {
        cursor.style.transform = `translate(${e.pageX - 150}px, ${e.pageY - 150}px)`;
    });
}); 
