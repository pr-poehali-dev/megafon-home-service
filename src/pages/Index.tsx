import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const tariffs = [
    {
      name: "Стартовый",
      speed: "100 Мбит/с",
      price: "450",
      oldPrice: "590",
      features: ["Интернет 100 Мбит/с", "Wi-Fi роутер в аренду", "Подключение 0 ₽", "Техподдержка 24/7"],
      popular: false,
    },
    {
      name: "Оптимальный",
      speed: "300 Мбит/с",
      price: "650",
      oldPrice: "790",
      features: ["Интернет 300 Мбит/с", "Wi-Fi роутер в подарок", "Подключение 0 ₽", "Техподдержка 24/7", "200 ТВ-каналов"],
      popular: true,
    },
    {
      name: "Максимальный",
      speed: "500 Мбит/с",
      price: "850",
      oldPrice: "990",
      features: ["Интернет 500 Мбит/с", "Wi-Fi роутер премиум", "Подключение 0 ₽", "Техподдержка 24/7", "300 ТВ-каналов + HD"],
      popular: false,
    },
  ];

  const offers = [
    {
      title: "Интернет + ТВ",
      discount: "до 30%",
      description: "При подключении пакета интернет + ТВ",
      icon: "Tv",
    },
    {
      title: "Приведи друга",
      discount: "1 месяц",
      description: "Бесплатный интернет за каждого друга",
      icon: "Users",
    },
    {
      title: "Переход с другого оператора",
      discount: "3 месяца",
      description: "Скидка 50% при переходе от конкурентов",
      icon: "Zap",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Оставьте заявку",
      description: "Позвоните или заполните форму на сайте",
      icon: "Phone",
    },
    {
      number: "02",
      title: "Проверка адреса",
      description: "Мы проверим возможность подключения",
      icon: "MapPin",
    },
    {
      number: "03",
      title: "Выбор тарифа",
      description: "Подберём оптимальное предложение",
      icon: "Package",
    },
    {
      number: "04",
      title: "Подключение",
      description: "Мастер приедет в удобное время",
      icon: "CheckCircle2",
    },
  ];

  const faqs = [
    {
      question: "Как быстро можно подключить интернет?",
      answer: "Обычно подключение занимает от 1 до 3 рабочих дней после подачи заявки. В некоторых случаях возможно подключение в день обращения.",
    },
    {
      question: "Какое оборудование нужно для подключения?",
      answer: "Мы предоставляем всё необходимое оборудование: оптический терминал и Wi-Fi роутер. Никаких дополнительных покупок не требуется.",
    },
    {
      question: "Можно ли сменить тариф после подключения?",
      answer: "Да, вы можете в любой момент изменить тариф через личный кабинет или позвонив в службу поддержки. Смена тарифа происходит бесплатно.",
    },
    {
      question: "Что делать если пропал интернет?",
      answer: "Сначала попробуйте перезагрузить роутер. Если это не помогло, обратитесь в техподдержку по телефону 8-800-550-05-00 (звонок бесплатный).",
    },
    {
      question: "Есть ли скрытые платежи?",
      answer: "Нет, все условия прозрачны. Вы платите только указанную абонентскую плату. Подключение и настройка оборудования бесплатны.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Wifi" className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold text-primary">МегаФон</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection("tariffs")} className="text-sm font-medium hover:text-primary transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection("how-to")} className="text-sm font-medium hover:text-primary transition-colors">
                Как подключить
              </button>
              <button onClick={() => scrollToSection("offers")} className="text-sm font-medium hover:text-primary transition-colors">
                Акции
              </button>
              <button onClick={() => scrollToSection("contacts")} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
              <button onClick={() => scrollToSection("faq")} className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </button>
            </nav>

            <Button size="lg" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              8-800-550-05-00
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-white hover:bg-secondary/90">Официальный дилер</Badge>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Домашний интернет и ТВ от <span className="text-primary">МегаФон</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Высокоскоростной интернет до 500 Мбит/с и 300+ ТВ-каналов. Бесплатное подключение и настройка оборудования.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => scrollToSection("tariffs")}>
                  Выбрать тариф
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" onClick={() => scrollToSection("contacts")}>
                  Получить консультацию
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Wifi" className="text-primary" size={24} />
                  </div>
                  <CardTitle>До 500 Мбит/с</CardTitle>
                  <CardDescription>Скорость интернета</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Tv" className="text-secondary" size={24} />
                  </div>
                  <CardTitle>300+ каналов</CardTitle>
                  <CardDescription>ТВ в HD качестве</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <CardTitle>1-3 дня</CardTitle>
                  <CardDescription>Быстрое подключение</CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-2">
                    <Icon name="Shield" className="text-secondary" size={24} />
                  </div>
                  <CardTitle>24/7</CardTitle>
                  <CardDescription>Техподдержка</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Тарифы интернета и ТВ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный тариф для вашего дома. Все тарифы включают бесплатное подключение.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all ${tariff.popular ? 'border-primary border-2 scale-105' : ''}`}>
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-secondary text-white px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Icon name="Gauge" className="text-primary" size={32} />
                    <span className="text-3xl font-bold text-primary">{tariff.speed}</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-4xl font-bold">{tariff.price} ₽</span>
                      <span className="text-muted-foreground">/мес</span>
                    </div>
                    <div className="text-sm text-muted-foreground line-through">{tariff.oldPrice} ₽</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {tariff.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6" variant={tariff.popular ? "default" : "outline"}>
                    Подключить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Как подключить интернет</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Простой процесс подключения за 4 шага
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                        <Icon name={step.icon as any} className="text-white" size={24} />
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardHeader>
                </Card>
                {index < steps.length - 1 && (
                  <Icon name="ArrowRight" className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 text-primary" size={24} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="offers" className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Специальные предложения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Дополнительные выгоды для наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {offers.map((offer, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow bg-white">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={offer.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-2xl mb-3">{offer.title}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">{offer.discount}</div>
                  <CardDescription className="text-base">{offer.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Контакты дилера</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Телефон</CardTitle>
                      <CardDescription className="text-base space-y-1">
                        <div className="font-semibold text-foreground text-lg">8-800-550-05-00</div>
                        <div>Бесплатно по России</div>
                        <div>Ежедневно с 8:00 до 22:00</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Адрес офиса</CardTitle>
                      <CardDescription className="text-base space-y-1">
                        <div>г. Москва, ул. Тверская, д. 1</div>
                        <div>ТЦ "Центральный", 2 этаж</div>
                        <div>Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Email</CardTitle>
                      <CardDescription className="text-base space-y-1">
                        <div className="font-semibold text-foreground">info@megafon-dealer.ru</div>
                        <div>Ответим в течение 1 часа</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="mb-2">Мессенджеры</CardTitle>
                      <CardDescription className="text-base space-y-1">
                        <div>WhatsApp: +7 (999) 123-45-67</div>
                        <div>Telegram: @megafon_dealer</div>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="mt-8 bg-gradient-to-br from-primary to-secondary text-white">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2 text-white">Оставьте заявку</CardTitle>
                <CardDescription className="text-white/90 mb-6">
                  Мы перезвоним в течение 15 минут и подберём лучший тариф
                </CardDescription>
                <Button size="lg" variant="secondary" className="mx-auto">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Заказать звонок
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
              <p className="text-lg text-muted-foreground">
                Ответы на популярные вопросы о подключении
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-white">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Wifi" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">МегаФон</span>
              </div>
              <p className="text-sm text-white/70">
                Официальный дилер МегаФон по продаже домашнего интернета и ТВ
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><button onClick={() => scrollToSection("tariffs")} className="hover:text-white transition-colors">Тарифы</button></li>
                <li><button onClick={() => scrollToSection("how-to")} className="hover:text-white transition-colors">Как подключить</button></li>
                <li><button onClick={() => scrollToSection("offers")} className="hover:text-white transition-colors">Акции</button></li>
                <li><button onClick={() => scrollToSection("faq")} className="hover:text-white transition-colors">FAQ</button></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>8-800-550-05-00</li>
                <li>info@megafon-dealer.ru</li>
                <li>г. Москва, ул. Тверская, д. 1</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Режим работы</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Пн-Пт: 9:00-20:00</li>
                <li>Сб-Вс: 10:00-18:00</li>
                <li>Горячая линия: 24/7</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>© 2024 МегаФон. Все права защищены. Официальный дилер.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
