import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcspscEntity } from './tCSPSC.entity';

@Index('PK_TCSPSS', ['numcontrato', 'codprod', 'serie'], { unique: true })
@Entity('TCSPSS', { schema: 'SANKHYA' })
export class TcspssEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'SERIE', length: 25 })
  serie: string;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('varchar', { name: 'SMARTCARD', nullable: true, length: 60 })
  smartcard: string | null;

  @Column('smallint', { name: 'PRIORIDADE', nullable: true })
  prioridade: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcspsses)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcspscEntity, (tcspscEntity) => tcspscEntity.tcspsses)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcspsc: TcspscEntity;
}
