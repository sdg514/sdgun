document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('#navMenu li'); // nav 메뉴 항목
    const subMenus = document.querySelectorAll('.menuHide');   // 서브 메뉴들
    let currentOpen = null; // 현재 열려 있는 메뉴 저장

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            const targetMenu = document.querySelector(`.menuHide[data-menu="${index + 1}"]`);

            if (currentOpen === targetMenu) {
                // 현재 열린 메뉴를 다시 클릭한 경우 → 닫기
                targetMenu.classList.remove('show');
                currentOpen = null;
            } else {
                // 다른 메뉴 클릭 → 기존 메뉴 닫고, 새 메뉴 열기
                subMenus.forEach(menu => menu.classList.remove('show'));
                targetMenu.classList.add('show');
                currentOpen = targetMenu;
            }
        });
    });
});
