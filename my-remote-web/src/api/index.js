import axios from "axios";

const base = {
  // baseUrl: "http://3.27.85.183:5566",
  baseUrl: "http://127.0.0.1:5566",
  teamBio: "/api/bio/team-member",
  researchContent: "/api/research/content",
  sendEmail: "/api/contact/send-email",
  news: "/api/news",
  papers: "/api/publication/papers"
};

const api = {
  getTeamBio() {
    return axios.get(base.baseUrl + base.teamBio, { withCredentials: true })
  },

  getResearchInfo() {
    return axios.get(base.baseUrl + base.researchContent, { withCredentials: true })
  },

  sendContactForm(data) {
    return axios.post(base.baseUrl + base.sendEmail, data, { withCredentials: true })
  },

  getNews() {
    return axios.get(base.baseUrl + base.news, { withCredentials: true })
  },

  getPapers() {
    return axios.get(base.baseUrl + base.papers, { withCredentials: true })
  }
};

export default api;