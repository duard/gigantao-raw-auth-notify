import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TgftrnEntity } from './tGFTRN.entity';
import { TsilibEntity } from './tSILIB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFRNG', ['nurng'], { unique: true })
@Entity('TGFRNG', { schema: 'SANKHYA' })
export class TgfrngEntity {
  @Column('int', { primary: true, name: 'NURNG' })
  nurng: number;

  @Column('varchar', { name: 'DESCRICAO', length: 80 })
  descricao: string;

  @Column('varchar', { name: 'EXPRESSAO', length: 3103 })
  expressao: string;

  @Column('varchar', { name: 'TIPOEXPRESSAO', length: 10 })
  tipoexpressao: string;

  @Column('varchar', { name: 'ONDE', length: 10 })
  onde: string;

  @Column('varchar', { name: 'QUANDO', length: 10 })
  quando: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('smallint', { name: 'EVENTO', nullable: true })
  evento: number | null;

  @Column('varchar', { name: 'INIBELIB', nullable: true, length: 1 })
  inibelib: string | null;

  @Column('text', { name: 'CONFIG', nullable: true })
  config: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfrngs)
  @JoinColumn([{ name: 'CODUSULIB', referencedColumnName: 'codusu' }])
  codusulib: TsiusuEntity;

  @OneToMany(() => TgftrnEntity, (tgftrnEntity) => tgftrnEntity.nurng2)
  tgftrns: TgftrnEntity[];

  @OneToMany(() => TsilibEntity, (tsilibEntity) => tsilibEntity.nurng)
  tsilibs: TsilibEntity[];
}
