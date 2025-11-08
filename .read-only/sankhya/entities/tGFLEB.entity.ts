import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfccrEntity } from './tGFCCR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFLEB', ['nuleb'], { unique: true })
@Entity('TGFLEB', { schema: 'SANKHYA' })
export class TgflebEntity {
  @Column('int', { primary: true, name: 'NULEB' })
  nuleb: number;

  @Column('int', { name: 'QTDCARTOES' })
  qtdcartoes: number;

  @Column('datetime', { name: 'DHGERACAO' })
  dhgeracao: Date;

  @OneToMany(() => TgfccrEntity, (tgfccrEntity) => tgfccrEntity.nuleb)
  tgfccrs: TgfccrEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgflebs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
