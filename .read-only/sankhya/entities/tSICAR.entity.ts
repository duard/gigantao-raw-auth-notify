import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiiecEntity } from './tSIIEC.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsicciEntity } from './tSICCI.entity';

@Index('PK_TSICAR', ['codcartorio'], { unique: true })
@Entity('TSICAR', { schema: 'SANKHYA' })
export class TsicarEntity {
  @Column('int', { primary: true, name: 'CODCARTORIO' })
  codcartorio: number;

  @Column('varchar', { name: 'MODENVIO', nullable: true, length: 100 })
  modenvio: string | null;

  @Column('varchar', { name: 'MODRETIRADA', nullable: true, length: 100 })
  modretirada: string | null;

  @Column('varchar', { name: 'IMPENVIO', nullable: true, length: 100 })
  impenvio: string | null;

  @Column('varchar', { name: 'IMPRETIRADA', nullable: true, length: 100 })
  impretirada: string | null;

  @Column('varchar', { name: 'RECEBETXANT', length: 1 })
  recebetxant: string;

  @Column('int', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'CODPARCRESP', nullable: true })
  codparcresp: number | null;

  @ManyToOne(() => TsiiecEntity, (tsiiecEntity) => tsiiecEntity.tsicars)
  @JoinColumn([{ name: 'CODTBENV', referencedColumnName: 'codtabela' }])
  codtbenv: TsiiecEntity;

  @ManyToOne(() => TsiiecEntity, (tsiiecEntity) => tsiiecEntity.tsicars2)
  @JoinColumn([{ name: 'CODTBRET', referencedColumnName: 'codtabela' }])
  codtbret: TsiiecEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tsicars)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @OneToMany(() => TsicciEntity, (tsicciEntity) => tsicciEntity.codcartorio2)
  tsiccis: TsicciEntity[];
}
