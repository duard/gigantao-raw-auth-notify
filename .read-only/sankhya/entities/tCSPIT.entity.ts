import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSPIT', ['numcontrato', 'sequencia', 'codprod'], { unique: true })
@Entity('TCSPIT', { schema: 'SANKHYA' })
export class TcspitEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'QUANTIDADE', nullable: true })
  quantidade: number | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('varchar', { name: 'VLRIGUALPARC', nullable: true, length: 1 })
  vlrigualparc: string | null;

  @Column('varchar', { name: 'PARCPROP', nullable: true, length: 1 })
  parcprop: string | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tcspits)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato2: TcsconEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcspits)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
