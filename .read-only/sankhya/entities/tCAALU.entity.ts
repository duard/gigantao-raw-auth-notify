import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgftppEntity } from './tGFTPP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcadalEntity } from './tCADAL.entity';
import { TcamatEntity } from './tCAMAT.entity';

@Index('PK_TCAALU', ['codparc'], { unique: true })
@Entity('TCAALU', { schema: 'SANKHYA' })
export class TcaaluEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('char', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('image', { name: 'FOTO', nullable: true })
  foto: Buffer | null;

  @Column('datetime', { name: 'DTDESATIVO', nullable: true })
  dtdesativo: Date | null;

  @Column('char', { name: 'AD_MOSTRA_DESC', nullable: true, length: 1 })
  adMostraDesc: string | null;

  @ManyToOne(() => TgftppEntity, (tgftppEntity) => tgftppEntity.tcaalus)
  @JoinColumn([{ name: 'CODTPRESP', referencedColumnName: 'codtipparc' }])
  codtpresp: TgftppEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcaalus)
  @JoinColumn([{ name: 'CODMAE', referencedColumnName: 'codparc' }])
  codmae: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcaalus2)
  @JoinColumn([{ name: 'CODPAI', referencedColumnName: 'codparc' }])
  codpai: TgfparEntity;

  @OneToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcaalu, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tcaalus3)
  @JoinColumn([{ name: 'CODRESP', referencedColumnName: 'codparc' }])
  codresp: TgfparEntity;

  @OneToMany(() => TcadalEntity, (tcadalEntity) => tcadalEntity.codparc2)
  tcadals: TcadalEntity[];

  @OneToMany(() => TcamatEntity, (tcamatEntity) => tcamatEntity.codparc)
  tcamats: TcamatEntity[];
}
