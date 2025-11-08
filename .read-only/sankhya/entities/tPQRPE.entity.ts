import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqperEntity } from './tPQPER.entity';
import { TpqpesEntity } from './tPQPES.entity';
import { TpqresEntity } from './tPQRES.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TPQRPE', ['nupesq', 'codperg', 'codresp'], { unique: true })
@Entity('TPQRPE', { schema: 'SANKHYA' })
export class TpqrpeEntity {
  @Column('int', { primary: true, name: 'NUPESQ' })
  nupesq: number;

  @Column('int', { primary: true, name: 'CODPERG' })
  codperg: number;

  @Column('int', { primary: true, name: 'CODRESP' })
  codresp: number;

  @Column('text', { name: 'TEXTO', nullable: true })
  texto: string | null;

  @Column('float', { name: 'VALOR', nullable: true, precision: 53 })
  valor: number | null;

  @Column('datetime', { name: 'DHCORRECAO', nullable: true })
  dhcorrecao: Date | null;

  @Column('float', { name: 'NOTA', nullable: true, precision: 53 })
  nota: number | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('image', { name: 'ANEXO', nullable: true })
  anexo: Buffer | null;

  @Column('smallint', { name: 'CODUSUCORRETOR', nullable: true })
  codusucorretor: number | null;

  @Column('char', { name: 'PROIBELIMPEZA', nullable: true, length: 1 })
  proibelimpeza: string | null;

  @ManyToOne(() => TpqperEntity, (tpqperEntity) => tpqperEntity.tpqrpes)
  @JoinColumn([{ name: 'CODPERG', referencedColumnName: 'codperg' }])
  codperg2: TpqperEntity;

  @ManyToOne(() => TpqpesEntity, (tpqpesEntity) => tpqpesEntity.tpqrpes)
  @JoinColumn([{ name: 'NUPESQ', referencedColumnName: 'nupesq' }])
  nupesq2: TpqpesEntity;

  @ManyToOne(() => TpqresEntity, (tpqresEntity) => tpqresEntity.tpqrpes)
  @JoinColumn([
    { name: 'CODRESP', referencedColumnName: 'codresp' },
    { name: 'CODPERG', referencedColumnName: 'codperg' },
  ])
  tpqres: TpqresEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tpqrpes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
