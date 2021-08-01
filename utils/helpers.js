module.exports = {
    format_paragraph: paragraph => {
        if (paragraph.length > 75) {
            paragraph = paragraph.substr(0,74) + '...';
        }
        return paragraph;
    }
}