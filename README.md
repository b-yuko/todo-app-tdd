# TODOアプリをTDDしながら作ります

## 使用技術
- Frontend
    - TypeScript
    - React
    - Vite
    - Vitest
- Backend
    - Kotlin
    - Spring Boot

## 使用端末/エディター
- MackBook Pro(Apple M1 Pro)
- IntelliJ IDEA (Ultimate Edition)

## ブランチ
- main: 常に安定しているリリース可能な状態を保つ。
- develop: 次のリリースに向けた開発用のブランチ。
- feature/*: 新機能開発用ブランチ。developから派生し、developにマージ。
- release/*: リリース準備用ブランチ。バグ修正や最終調整を行い、mainにマージ。

## 開発環境構築
### Frontend
```shell
cd frontend
npm install
npm run dev
```