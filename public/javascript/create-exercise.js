const img_id = [];
let tagIds = [];
let type_id;
let tempArr;
async function newExerciseHandler(event) {
    event.preventDefault();

    const difficulty_id = document.querySelector(
        'select[name="difficulty"]'
    ).value;
    const type_id = document.querySelector('select[name="type"]').value;
    const title = document.querySelector('input[name="exercise-title"]').value;
    const description = document.querySelector(
        'textarea[name="exercise-description"]'
    ).value;

    // console.log(tags_id);

    const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({
            tagIds,
            difficulty_id,
            type_id,
            title,
            description,
            img_id,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

$("input:checkbox").click(function () {
    if ($(this).prop("checked")) {
        tagIds.push($(this).attr("id"));
        // console.log(tags_id);
    } else if ($(this).prop("checked", false)) {
        tempArr = [];
        tempArr = tagIds.filter((tag) => {
            return $(this).attr("id") != tag;
        });
        tagIds = tempArr;
        // console.log(tags_id);
    }
});

function getImageId() {
    img_id.push($(this).attr("id"));
    $("#imageSelect").removeClass("d-inherit").addClass("d-none");
}

$(".img").on("click", getImageId);

$("#imgSelectBtn").on("click", function () {
    $("#imageSelect").removeClass("d-none").addClass("d-inherit");
});
$("#createBtn").on("click", newExerciseHandler);
