import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwocoEntity } from './tGWOCO.entity';

@Index('PK_TGWMOC', ['codmoc'], { unique: true })
@Entity('TGWMOC', { schema: 'SANKHYA' })
export class TgwmocEntity {
  @Column('int', { primary: true, name: 'CODMOC' })
  codmoc: number;

  @Column('datetime', { name: 'DHMOV' })
  dhmov: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('int', { name: 'CODEND' })
  codend: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('numeric', { name: 'QTD', precision: 13, scale: 4 })
  qtd: number;

  @Column('int', { name: 'NUTAREFA', nullable: true })
  nutarefa: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @ManyToOne(() => TgwocoEntity, (tgwocoEntity) => tgwocoEntity.tgwmocs)
  @JoinColumn([{ name: 'CODOCO', referencedColumnName: 'codoco' }])
  codoco: TgwocoEntity;
}
