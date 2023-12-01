# Little Lemon Wep App - Meta Capstone Project

Welcome to the repository documenting my journey through the Capstone Project course, where I built a React-based web app for the Little Lemon restaurant. This project showcases my skills in front-end web development using React and serves as a comprehensive demonstration of my abilities.

## Table of contents

- [Course Stucture](#course-structure)
  - [Module One](#module-one)
  - [Module Two](#module-two)
  - [Module Three](#module-three)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Course Structure

### Module 1: Starting the project
- Set up the development environment for efficiency.
- Implemented version control using Git and GitHub.
- Planned UX/UI, wireframed the project, created components, and applied design fundamentals in Figma.

### Module 2: Project foundations
- Revised semantic HTML and structured the app accordingly.
- Styled the app using CSS and established a reusable CSS grid.
- Set up and organized project components.

### Module 3: Project functionality
- Focused on coding interactive components, such as the app's booking form.
- Implemented the booking form's state management.
- Form Validation wih Formik
- Setting up a validation Schema Using Yup
- React Browser router and Hash Router
- Improved UX/UI through design evaluation, addressing accessibility and form design.

  
### Screenshot

![](https://github.com/oduwole-ayomipo//Screenshot.png)


## My process

### Built with
- React Library
- Form Validation wih Formik and Yup
- React Routers
- Version Control
- Semantic HTML5 markup
- CSS Flexbox
- Mobile-first workflow


### What I learned

- Successfully developed a fully functional React web app for Little Lemon restaurant.
- Demonstrated proficiency in setting up and optimizing development environments.
- Showcased expertise in version control using Git and GitHub.
- Applied design principles and UX/UI considerations in Figma.
- Established a structured HTML foundation and implemented responsive CSS styling.
- Implemented interactive components, managed state effectively, and utilized APIs.
- Ensured code correctness and reliability through unit testing.
- Participated in collaborative peer review and reflective assessments.

- These are some snippets I am proud of

```js
 const [basicForm, setBasicForm] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    emailAddress: "",
  });

  const onSubmit = async (values) => {
    // Handle form submission logic here
    setLoadingSpinner(true);
    console.log("onSubmit", values);

    //Add a 3 secs delay
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // Continue with the rest of your logic after the delay
    setBasicForm(values);
    setLoadReservationForm(true);
    setFormSubmitted(true);

    setLoadingSpinner(false);
  };
  //Formik
  const formik = useFormik({
    initialValues: basicForm,

    onSubmit,

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Field cannot be empty")
        .min(3, "First name must be more than 3 characters"),
      lastName: Yup.string()
        .required("Field cannot be empty")
        .min(3, "Last name must be more than 3 characters"),
      mobileNumber: Yup.string()
        .required("Field cannot be empty")
        .max(11, "Phone number must be more than 11 digits"),
      emailAddress: Yup.string()
        .required(" Field  cannot be empty")
        .email("Please provide a valid email"),
    }),
  });

  const handleLinkClick = () => {
    window.scroll(0, 0);
```


## Author

- LinkedIn - [Oduwole Ayomipo]([https://www.frontendmentor.io/profile/oduwoleayomipo](https://www.linkedin.com/in/oduwole-ayomipo/))
- Twitter - [JustAyooo](https://www.twitter.com/ayooo.eth)


## Acknowledgments
ME and OpenAI
