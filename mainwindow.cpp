#include <QGraphicsView>
#include <iostream>
#include "mainwindow.h"
#include "ui_mainwindow.h"
#include "my_scene.h"
#include "graphicsview.h"
#include "f_checkbox.h"
#include "s_checkbox.h"

MainWindow::MainWindow(QWidget *parent) :
    QMainWindow(parent),
    ui(new Ui::MainWindow)

{
    ui->setupUi(this);
/*
    my_scene*scene=new my_scene(this);
    scene->setSceneRect(-1,-1,F_WIDTH*G_UNIT+1,F_HEIGHT*G_UNIT+1);
    ui->graphicsView->setScene(scene);
    ui->graphicsView->setDragMode(QGraphicsView::ScrollHandDrag);
    ui->graphicsView->setAlignment(Qt::AlignTop | Qt::AlignLeft);

  */
    std::cout<<"main window!!"<<std::endl;
    connect(ui->graphicsView1,SIGNAL(flagChanged(bool,bool)),ui->checkBox1,SLOT(checkState(bool,bool)));
    connect(ui->graphicsView1,SIGNAL(flagChanged(bool,bool)),ui->checkBox2,SLOT(checkState(bool,bool)));
    connect(ui->graphicsView1,SIGNAL(flagChanged(bool,bool)),ui->pushButton1,SLOT(checkButtonState(bool,bool)));
    connect(ui->pushButton1,&pushButton::clicked,ui->graphicsView1,&graphicsView::viewReact);
    connect(ui->graphicsView1,&graphicsView::pathFindingFinished,ui->pushButton1,&pushButton::checkButtonState_finished);    /*
    my_scene scene;
 //   QGraphicsRectItem it(0,0,8,8);

//    Block bl(6);
    QPen pen;
    pen.setColor(Qt::black);
//    bl.setPen(pen);
  //  it.setPen(pen);
 //   scene.addItem(&bl);
  //  scene.addItem(&it);

    QGraphicsView view;
    view.setScene(&scene);
    view.setAlignment(Qt::AlignTop | Qt::AlignLeft);
    view.show();
    */

}

MainWindow::~MainWindow()
{
    delete ui;
}
