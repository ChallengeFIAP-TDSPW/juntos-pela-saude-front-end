window.watsonAssistantChatOptions = {
integrationID: "e0ae3ed6-6ac1-4906-805f-93caf06f4628", // The ID of this integration.
region: "au-syd", // The region your integration is hosted in.
serviceInstanceID: "bdfb552a-598d-40ad-a08e-3049a845336d", // The ID of your service instance.
onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
const t = document.createElement('script');
t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
document.head.appendChild(t);
});
