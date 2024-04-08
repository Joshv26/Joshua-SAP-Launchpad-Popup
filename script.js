
// // last page javascript edit

// document.addEventListener('DOMContentLoaded', function () {
//     const popupContent = document.querySelector('.screen-step');
//     const closeButton = document.querySelector('.button-3');
//     const nextButton = document.querySelector('.button-2');
//     const page1 = document.querySelector('.page-1');
//     const page2 = document.querySelector('.page-2');
//     const page3 = document.querySelector('.page-3');
//     const page4 = document.querySelector('.page-4'); // New

//     // Function to open the popup
//     function openPopup() {
//         popupContent.style.display = 'block'; // Display the popup content
//         page1.style.display = 'block'; // Display the first page initially
//         page2.style.display = 'none'; // Hide the second page initially
//         page3.style.display = 'none'; // Hide the third page initially
//         page4.style.display = 'none'; // Hide the fourth page initially
//     }

//     // Function to close the popup
//     function closePopup() {
//         popupContent.style.display = 'none'; // Hide the popup content
//     }

//     // Function to switch to Page 2 content
//     function showPage2() {
//         page1.style.display = 'none';
//         page2.style.display = 'block';
//         page3.style.display = 'none'; // Hide the third page
//         page4.style.display = 'none'; // Hide the fourth page
//     }

//     // Function to switch to Page 3 content
//     function showPage3() {
//         page2.style.display = 'none';
//         page3.style.display = 'block';
//         page4.style.display = 'none'; // Hide the fourth page
//     }

//     // Function to switch to Page 4 content
//     function showPage4() {
//         page3.style.display = 'none';
//         page4.style.display = 'block';
//     }

//     // Function to switch to Page 1 content
//     function showPage1() {
//         page2.style.display = 'none';
//         page1.style.display = 'block';
//     }

//     // Event listener to open the popup when the page loads
//     openPopup();

//     // Event listener for the close button
//     closeButton.addEventListener('click', closePopup);

//     // Event listener for the "Next" button on Page 1
//     nextButton.addEventListener('click', showPage2);

//     // Event listener for the "Close" button on Page 2
//     const closePage2Button = document.querySelector('.page-2 .button-3');
//     closePage2Button.addEventListener('click', closePopup);

//     // Event listener for the "Next" button on Page 2
//     const nextPage2Button = document.querySelector('.page-2 .button-2');
//     nextPage2Button.addEventListener('click', showPage3);

//     // Event listener for the "Close" button on Page 3
//     const closePage3Button = document.querySelector('.page-3 .button-3');
//     closePage3Button.addEventListener('click', closePopup);

//     // Event listener for the "Next" button on Page 3
//     const nextPage3Button = document.querySelector('.page-3 .button-2');
//     nextPage3Button.addEventListener('click', showPage4);
// });





document.addEventListener('DOMContentLoaded', function () {
    const popupContent = document.querySelector('.screen-step');
    const closeButton = document.querySelector('.button-3');
    const nextButton = document.querySelector('.button-2');
    const page1 = document.querySelector('.page-1');
    const page2 = document.querySelector('.page-2');
    const page3 = document.querySelector('.page-3');
    const page4 = document.querySelector('.page-4');

    // Function to open the popup
    function openPopup() {
        popupContent.style.display = 'block';
        page1.style.display = 'block';
        page2.style.display = 'none';
        page3.style.display = 'none';
        page4.style.display = 'none';
    }

    // Function to close the popup
    function closePopup() {
        popupContent.style.display = 'none';
    }

    // Function to switch to Page 2 content
    function showPage2() {
        page1.style.display = 'none';
        page2.style.display = 'block';
        page3.style.display = 'none';
        page4.style.display = 'none';
    }

    // Function to switch to Page 3 content
    function showPage3() {
        page2.style.display = 'none';
        page3.style.display = 'block';
        page4.style.display = 'none';
    }

    // Function to switch to Page 4 content
    function showPage4() {
        page3.style.display = 'none';
        page4.style.display = 'block';
    }

    // Function to switch to Page 1 content
    function showPage1() {
        page2.style.display = 'none';
        page1.style.display = 'block';
    }

    // Event listener to open the popup when the page loads
    openPopup();

    // Event listener for the close button
    closeButton.addEventListener('click', closePopup);

    // Event listener for the "Next" button on Page 1
    nextButton.addEventListener('click', showPage2);

    // Event listener for the "Close" button on Page 2
    const closePage2Button = document.querySelector('.page-2 .button-3');
    closePage2Button.addEventListener('click', closePopup);

    // Event listener for the "Next" button on Page 2
    const nextPage2Button = document.querySelector('.page-2 .button-2');
    nextPage2Button.addEventListener('click', showPage3);

    // Event listener for the "Close" button on Page 3
    const closePage3Button = document.querySelector('.page-3 .button-3');
    closePage3Button.addEventListener('click', closePopup);

    // Event listener for the "Next" button on Page 3
    const nextPage3Button = document.querySelector('.page-3 .button-2');
    nextPage3Button.addEventListener('click', showPage4);

    // Event listener for the "Close" button on Page 4
    const closePage4Button = document.querySelector('.page-4 .button-3');
    closePage4Button.addEventListener('click', closePopup);
});
