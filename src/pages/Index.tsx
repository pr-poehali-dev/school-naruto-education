import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const userRank = "Чунин";
  const userXP = 2450;
  const nextRankXP = 5000;
  const progressPercent = (userXP / nextRankXP) * 100;

  const subjects = [
    { name: "Математика", icon: "Calculator", classes: "1-11", quests: 245, color: "bg-blue-500" },
    { name: "Русский язык", icon: "BookOpen", classes: "1-11", quests: 189, color: "bg-green-500" },
    { name: "История", icon: "Scroll", classes: "5-11", quests: 156, color: "bg-purple-500" },
    { name: "Физика", icon: "Zap", classes: "7-11", quests: 134, color: "bg-yellow-500" },
    { name: "Биология", icon: "Leaf", classes: "6-11", quests: 112, color: "bg-emerald-500" },
    { name: "Химия", icon: "TestTube", classes: "8-11", quests: 98, color: "bg-red-500" },
  ];

  const achievements = [
    { title: "Первое задание", description: "Выполнил первое задание", icon: "Star", earned: true },
    { title: "Неделя обучения", description: "Учился 7 дней подряд", icon: "Flame", earned: true },
    { title: "Мастер математики", description: "Выполнил 50 заданий по математике", icon: "Award", earned: false },
  ];

  const ranks = [
    { name: "Ученик", minXP: 0, color: "bg-gray-400" },
    { name: "Генин", minXP: 500, color: "bg-green-400" },
    { name: "Чунин", minXP: 2000, color: "bg-blue-400" },
    { name: "Джонин", minXP: 5000, color: "bg-purple-400" },
    { name: "Хокаге", minXP: 10000, color: "bg-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 font-open-sans">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              🥷
            </div>
            <h1 className="text-3xl font-montserrat font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              NINJA ACADEMY
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="font-medium">Главная</Button>
            <Button variant="ghost" className="font-medium">Курсы</Button>
            <Button variant="ghost" className="font-medium">Задания</Button>
            <Button variant="ghost" className="font-medium">Рейтинг</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/img/8094bf12-366b-49f1-b45e-bfcc079e5876.jpg" 
              alt="Ninja Student" 
              className="w-32 h-32 rounded-full border-4 border-orange-300 shadow-lg"
            />
          </div>
          <h2 className="text-5xl font-montserrat font-bold text-gray-800 mb-4">
            Добро пожаловать в <span className="text-orange-600">Академию Ниндзя!</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Изучай школьную программу с 1 по 11 класс через захватывающие квесты и задания. 
            Поднимайся от Чунина до Хокаге!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-medium">
              <Icon name="Play" className="mr-2" />
              Начать обучение
            </Button>
            <Button variant="outline" size="lg" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-medium">
              <Icon name="BookOpen" className="mr-2" />
              Посмотреть курсы
            </Button>
          </div>
        </div>
      </section>

      {/* User Progress */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto">
          <Card className="max-w-4xl mx-auto border-orange-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-montserrat">Твой прогресс</CardTitle>
              <div className="flex items-center justify-center space-x-4 mt-4">
                <Badge className={`${ranks.find(r => r.name === userRank)?.color} text-white px-6 py-2 text-lg font-medium`}>
                  {userRank}
                </Badge>
                <span className="text-2xl font-bold text-gray-700">{userXP} XP</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>До звания Джонин</span>
                  <span>{nextRankXP - userXP} XP осталось</span>
                </div>
                <Progress value={progressPercent} className="h-3" />
                <div className="flex justify-between space-x-2">
                  {ranks.map((rank, index) => (
                    <div key={rank.name} className="flex flex-col items-center flex-1">
                      <div className={`w-8 h-8 rounded-full ${
                        userXP >= rank.minXP ? rank.color : 'bg-gray-200'
                      } flex items-center justify-center text-white text-xs font-bold mb-1`}>
                        {index + 1}
                      </div>
                      <span className="text-xs text-center font-medium">{rank.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Subjects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12 text-gray-800">
            Школьные предметы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {subjects.map((subject) => (
              <Card key={subject.name} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-orange-100 hover:border-orange-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${subject.color} rounded-lg flex items-center justify-center text-white`}>
                      <Icon name={subject.icon as any} size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-montserrat">{subject.name}</CardTitle>
                      <CardDescription className="text-sm">Классы {subject.classes}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{subject.quests} заданий</span>
                    <Button size="sm" className="bg-orange-600 hover:bg-orange-700">
                      Изучать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12 text-gray-800">
            Достижения
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement) => (
              <Card key={achievement.title} className={`text-center ${
                achievement.earned ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300' : 'bg-gray-50 border-gray-200'
              }`}>
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-yellow-400 text-white' : 'bg-gray-300 text-gray-500'
                  }`}>
                    <Icon name={achievement.icon as any} size={28} />
                  </div>
                  <CardTitle className={`font-montserrat ${achievement.earned ? 'text-gray-800' : 'text-gray-500'}`}>
                    {achievement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className={achievement.earned ? 'text-gray-600' : 'text-gray-400'}>
                    {achievement.description}
                  </CardDescription>
                  {achievement.earned && (
                    <Badge className="bg-green-500 text-white mt-3">
                      Получено!
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12 text-gray-800">
            Статистика обучения
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">47</div>
                <div className="text-sm text-gray-600">Заданий выполнено</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-sm text-gray-600">Дней в обучении</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                <div className="text-sm text-gray-600">Предметов изучается</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">89%</div>
                <div className="text-sm text-gray-600">Средняя оценка</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-montserrat font-bold mb-4">Ninja Academy</h4>
              <p className="text-gray-300">Образовательная платформа для изучения школьной программы через игровой процесс.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Разделы</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Курсы</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Задания</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Рейтинг</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Следи за нами</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-orange-400">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-300 hover:text-orange-400">
                  <Icon name="Mail" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Ninja Academy. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}