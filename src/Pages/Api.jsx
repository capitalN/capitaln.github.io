export async function GetStaticProps() {
  let username = "capitalN";
  let res = await fetch(
    `https://api.github.com/search/repositories?q=user:${username}+fork:true&sort=updated&per_page=10&type=Repositorie`
  );
  let data = await res.json();
  return data.items;
}
