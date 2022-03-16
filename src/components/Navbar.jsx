import { NavLink } from "react-router-dom";
const links = [
  {
    'title': "Home",
    'link': "/",
    'id': "header-link-home",
  },

  {
    'title': "About",
    'link': "/about",
    'id': "header-link-about",
  },

  {
    'title': "Movies",
    'link': "/movies",
    'id': "header-link-movies",
  },

   
];
export const Navbar = () => {
  return (
    <>

    <div style={{padding: 20, backgroundColor: 'teal', color: 'white'}}>
      {links.map(({title, link}, index) => {
        return <NavLink key={index} to={link} style={{padding: 10, textDecoration: 'none', color: 'white'}}>{title}</NavLink>
      })}
    </div>
    </>
  )
};
