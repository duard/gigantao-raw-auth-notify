import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TcsrslEntity } from './tCSRSL.entity';
import { TfpcghEntity } from './tFPCGH.entity';

@Index('PK_TCSSLA', ['nusla'], { unique: true })
@Entity('TCSSLA', { schema: 'SANKHYA' })
export class TcsslaEntity {
  @Column('int', { primary: true, name: 'NUSLA' })
  nusla: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'TIPOFILTRO', length: 1 })
  tipofiltro: string;

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.nusla)
  tcscons: TcsconEntity[];

  @OneToMany(() => TcsrslEntity, (tcsrslEntity) => tcsrslEntity.nusla2)
  tcsrsls: TcsrslEntity[];

  @ManyToOne(() => TfpcghEntity, (tfpcghEntity) => tfpcghEntity.tcsslas)
  @JoinColumn([{ name: 'CODCARGAHOR', referencedColumnName: 'codcargahor' }])
  codcargahor: TfpcghEntity;
}
