$(".postId").on("click", ".card", function (e) {
    const postId = $(this).attr("id").split("-")[1];
    console.log(postId);
    // document.location.replace(`/posts/${postId}`)
});
