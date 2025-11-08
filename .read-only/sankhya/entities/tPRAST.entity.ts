import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TprswxpEntity } from './tPRSWXP.entity';
import { TprwcpEntity } from './tPRWCP.entity';

@Index('PK_TPRAST', ['nuast'], { unique: true })
@Entity('TPRAST', { schema: 'SANKHYA' })
export class TprastEntity {
  @Column('int', { primary: true, name: 'NUAST' })
  nuast: number;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('float', {
    name: 'PESORELATIVO',
    precision: 53,
    default: () => '(1)',
  })
  pesorelativo: number;

  @Column('varchar', { name: 'NOMEINSTANCIAREF', length: 30 })
  nomeinstanciaref: string;

  @Column('varchar', { name: 'ITENSLISTA', length: 512 })
  itenslista: string;

  @Column('varchar', { name: 'EXPVALIDACAO', length: 3103 })
  expvalidacao: string;

  @Column('char', { name: 'ESTADOWC', length: 1, default: () => "'S'" })
  estadowc: string;

  @Column('varchar', { name: 'DESCRATRIBUTO', nullable: true, length: 100 })
  descratributo: string | null;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprasts)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp: TprwcpEntity;

  @OneToMany(() => TprswxpEntity, (tprswxpEntity) => tprswxpEntity.nuast2)
  tprswxps: TprswxpEntity[];
}
