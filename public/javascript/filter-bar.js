const img_id = [];
let tags = [];
let type_id;
let tempArr;
async function filterBarHandler(event) {
    event.preventDefault();

    const difficulty = $("#exerciseDifficultyFilter option:selected").val()
    const type = $("#exerciseTypeFilter option:selected").val()

    const response = await fetch('/exercises', {
        method: "POST",
        body: JSON.stringify({
            tags,
            difficulty,
            type,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        // document.location.reload();
    } else {
        alert(response.statusText);
    }
}

$("input:checkbox").click(function () {
    if ($(this).prop("checked")) {
        tags.push($(this).attr("id"));
        // console.log(tags_id);
    } else if ($(this).prop("checked", false)) {
        tempArr = [];
        tempArr = tags.filter((tag) => {
            return $(this).attr("id") != tag;
        });
        tags = tempArr;

        // console.log(tagIds);
        // console.log(tempArr);
        // console.log(tags_id);
    }
});

$("#filterBtn").on("click", filterBarHandler);
