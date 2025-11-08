import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcspscEntity } from './tCSPSC.entity';

@Index('PK_TCSPPF', ['numcontrato', 'codprod', 'qtdinicial'], { unique: true })
@Entity('TCSPPF', { schema: 'SANKHYA' })
export class TcsppfEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'QTDINICIAL' })
  qtdinicial: number;

  @Column('int', { name: 'QTDFINAL' })
  qtdfinal: number;

  @Column('float', { name: 'PRECOUNIT', precision: 53 })
  precounit: number;

  @Column('float', { name: 'VLRFATMIN', precision: 53 })
  vlrfatmin: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcsppfs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsppfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcspscEntity, (tcspscEntity) => tcspscEntity.tcsppfs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcspsc: TcspscEntity;
}
