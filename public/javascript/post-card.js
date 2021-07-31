function postPageHandler (e) {
    e.preventDefault();
    const postId = $(this).attr("id").split("-")[1];
    console.log(postId);
    document.location.replace(`/posts/${postId}`)
}

$(".postId").on("click", ".card", postPageHandler);
