# TMDT

Link: https://github.com/Qua-mon/TMDT.git

cd C:\Program Files\Git\bin

git config --global user.email "you@example.com"
git config --global user.name "Your Name"

Ctrl + Shift + P >Git: Clone

---Một số code git-----

git pull origin main: Tự động Update code, file từ github về


git fetch --all ,  git reset --hard origin/master: Update code nhưng reset lại như hiện trạng code đc push trên gibhub ---> Đang code mà dùng cái này thì mất hết, làm lại từ đầu

git merge --abort: Xóa dữ liệu vừa update nếu bị xung đột

git pull --rebase origin "Tên branch" (main): Fix lỗi push ko đc

git push origin "Tên branch" (main): pust trực tiếp từ code 
