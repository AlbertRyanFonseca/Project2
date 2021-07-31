module.exports = {
    format_paragraph: paragraph => {
        if (paragraph.length > 11) {
            paragraph = paragraph.substr(0,10) + '...';
        }
        return paragraph;
    }
}