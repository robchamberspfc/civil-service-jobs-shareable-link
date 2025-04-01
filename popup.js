button.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  });
  chrome.scripting.executeScript({
    target: {
      tabId: tab.id
    },
    function: setLocationToResource,
  });
});

function setLocationToResource() {

  link = document.getElementsByClassName("linkedin")

  link = link[0].href

  link = link.replace('https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fwww.civilservicejobs.service.gov.uk%2Fcsr%2Fjobs.cgi%3Fjcode%3D','')

  url = `https://www.civilservicejobs.service.gov.uk/csr/jobs.cgi?jcode=${link}`

  window.location.replace (url);
}