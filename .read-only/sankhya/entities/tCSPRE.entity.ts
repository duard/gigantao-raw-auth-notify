import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcspscEntity } from './tCSPSC.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TCSPRE', ['numcontrato', 'codprod', 'referencia'], { unique: true })
@Entity('TCSPRE', { schema: 'SANKHYA' })
export class TcspreEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('int', { name: 'CODSERV', nullable: true })
  codserv: number | null;

  @Column('int', { name: 'QTDPARCPGCOM', nullable: true })
  qtdparcpgcom: number | null;

  @Column('int', { name: 'NUNOTAREAJ', nullable: true })
  nunotareaj: number | null;

  @Column('int', { name: 'CODTERRESPAR', nullable: true })
  codterrespar: number | null;

  @ManyToOne(() => TcspscEntity, (tcspscEntity) => tcspscEntity.tcspres)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcspsc: TcspscEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcspres)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
