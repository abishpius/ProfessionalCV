import { Skill, SkillCategory, Experience, Project, Education, Certification } from "../lib/types";

// Programming & Data Skills
export const programmingSkills: Skill[] = [
  { name: "Python", level: "Expert", progressPercentage: 95 },
  { name: "R", level: "Advanced", progressPercentage: 90 },
  { name: "SQL", level: "Advanced", progressPercentage: 85 },
  { name: "PySpark", level: "Advanced", progressPercentage: 80 },
  { name: "Bash", level: "Proficient", progressPercentage: 75 },
];

// Machine Learning & AI Skills
export const mlSkills: Skill[] = [
  { name: "LLMs", level: "Expert", progressPercentage: 95 },
  { name: "TensorFlow", level: "Advanced", progressPercentage: 90 },
  { name: "PyTorch", level: "Advanced", progressPercentage: 85 },
  { name: "Prompt Engineering", level: "Advanced", progressPercentage: 90 },
  { name: "Langchain", level: "Advanced", progressPercentage: 80 },
];

// Cloud & DevOps Skills
export const cloudSkills: Skill[] = [
  { name: "AWS", level: "Advanced", progressPercentage: 90 },
  { name: "Azure", level: "Advanced", progressPercentage: 80 },
  { name: "OCI", level: "Proficient", progressPercentage: 75 },
  { name: "Git", level: "Advanced", progressPercentage: 85 },
  { name: "Docker", level: "Advanced", progressPercentage: 80 },
];

// All skill categories
export const skillCategories: SkillCategory[] = [
  { title: "Programming & Data", skills: programmingSkills },
  { title: "Machine Learning & AI", skills: mlSkills },
  { title: "Cloud & DevOps", skills: cloudSkills },
];

// Certifications
export const certifications: Certification[] = [
  {
    name: "AWS Certified Machine Learning Specialty",
    issuer: "AWS",
    period: "March 2023 – March 2026",
  },
  {
    name: "Professional Machine Learning Engineer Certification",
    issuer: "Google",
    period: "April 2024 – April 2026",
  },
];

// Experiences
export const experiences: Experience[] = [
  {
    title: "Data Scientist",
    company: "United States Steel Corporation",
    location: "Pittsburgh, PA",
    period: "Jan 2021 – Current",
    responsibilities: [
      "Led Generative AI use cases for USS PrivateGPT, two Q&A tools, and an AI structured data Analyst all utilizing langchain. Scoped and improved prompt statements plus utilized few shot learning to fine tune outcomes. Final product was demo'd in Google Next'23 Keynote speech.",
      "Designed iron ore price 6-month forecasting model alongside a hedging decision strategy with expected returns >10% compared to baseline. Productionalized ingestion and modelling pipelines using kedro.",
      "Counted pipe inventory for different production plants using Azure custom vision and Oracle vision tool with 98% precision.",
    ],
  },
  {
    title: "Freelance Big Data Solutions Expert",
    company: "UpWork",
    location: "ID: freelancers/01d2db74395151722c",
    period: "October 2021 – Current",
    responsibilities: [
      "Completed 40+ jobs, received Expert Vetted status (top 1%) and earned membership in the Stanford Talent Cloud for successful analysis on Sensomics startup data within GCP Vertex AI.",
      "Consulted as a Data Science Lead for Trajum Analytics reducing medical appointment booking churn 30% through a hosted model endpoint on GCP AI Platform API.",
      "Consulted Vitro Technology Corporation in building a POC dashboard for SNMP Thingsboard data in AWS utilizing S3, Redshift and QuickSight.",
    ],
  },
  {
    title: "Data Scientist",
    company: "McGowan Institute of Regenerative Medicine",
    location: "South Side, PA",
    period: "July 2017 – Sep 2020",
    responsibilities: [
      "Pre-proccessed large genomics data parallelly on multiple compute nodes using bash and slurm scripting. Cleaned and visualized gene sequencing data using R Bioconductor and Python Scanpy to display differences in skeletal muscle health.",
      "Utilized CellProfiler CNNs to segment cells from fluorescent microscopic images and used random forest algorithms to classify young versus old muscle stem cells as well as PCA to identify distinct cell subpopulations.",
    ],
  },
];

// Projects
export const projects: Project[] = [
  {
    title: "USS PrivateGPT Implementation",
    description: "Led Generative AI use cases for USS PrivateGPT, creating tools that leveraged langchain and customized prompts for fine-tuned outcomes.",
    technologies: ["LLMs", "Langchain", "Prompt Engineering"],
    icon: "robot",
  },
  {
    title: "Financial Time Series Model",
    description: "Used TensorFlow to create a DL LSTM model to forecast univariate time series to specified period. Created web application with Streamlit and hosted as container on Heroku.",
    technologies: ["TensorFlow", "LSTM", "Streamlit", "Docker"],
    icon: "chart-line",
  },
  {
    title: "ICR - Identifying Age-Related Conditions",
    description: "Predicted if a person has any of three medical conditions using Optuna to tune an ensemble of Random Forest, XGB and lightGBM models in Python. Placed in top 9% of submitted models.",
    technologies: ["Machine Learning", "Ensemble Models", "Optuna", "Python"],
    icon: "heartbeat",
  },
];

// Education
export const educationData: Education[] = [
  {
    degree: "Masters of Science",
    field: "Computational Biomedicine",
    institution: "University of Pittsburgh",
    period: "2019 – 2020",
    description: "Focused on applying computational methods to biomedical research with emphasis on machine learning for healthcare applications.",
  },
  {
    degree: "Bachelor's of Science",
    field: "Neuroscience",
    institution: "University of Pittsburgh",
    period: "2013 – 2017",
    description: "Minors in Chemistry and Mathematics. Combined coursework in neuroscience with analytical methods for data-driven research.",
  },
];

// Contact info
export const contactInfo = {
  email: "abishpius@gmail.com",
  phone: "412-482-2088",
  linkedin: "www.linkedin.com/in/abish-pius-424566b3/",
  website: "abishpius.github.io/Abishpius/",
};
