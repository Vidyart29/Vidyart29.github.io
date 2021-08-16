import "../node_modules/blogtraversy/lib/index";

let url = "";
const usernames = {
  hashnodeUsername: "vidyarautela",
};
getBlogs("hashnode", usernames).then((res) => {
  console.log("Hashnode Blogs", res);

  url = res[0].url;
  url = url.replace("//", "//vidyarautela.hashnode.dev");
  console.log(url);
});
