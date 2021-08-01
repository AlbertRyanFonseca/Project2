const img_id = [];
let tags = [];
let type_id;
async function filterBarHandler(event) {
    event.preventDefault();

    const difficulty = $("#exerciseDifficultyFilter option:selected").val();
    const type = $("#exerciseTypeFilter option:selected").val();
    document.location.replace(`/filtered-exercises?tags=[${tags}]&difficulty=${difficulty}&type=${type}`);

}

$("input:checkbox").click(function () {
    if ($(this).prop("checked")) {
        tags.push($(this).attr("id"));
    } else if ($(this).prop("checked", false)) {
        
        tags = tags.filter((tag) => {
            return $(this).attr("id") != tag;
        });
        
    }
});

$("#filterBtn").on("click", filterBarHandler);
