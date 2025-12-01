document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 高级打字机效果 ---
    const titleElement = document.getElementById('typewriter-text');
    if (titleElement) {
        const textToType = titleElement.getAttribute('data-text');
        titleElement.innerHTML = ''; // 清空初始内容
        let i = 0;

        // 创建光标
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        titleElement.parentNode.insertBefore(cursor, titleElement.nextSibling);

        function typeWriter() {
            if (i < textToType.length) {
                titleElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, 100); // 打字速度
            } else {
                // 打完了，光标闪烁保留
            }
        }
        // 延迟 500ms 开始打字
        setTimeout(typeWriter, 500);
    }

    // --- 2. 滚动显现效果 (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // 当元素出现 10% 时触发
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 可选：如果只想触发一次，取消注释下面这行
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // 选取所有带有 .scroll-reveal 类的元素
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));
});