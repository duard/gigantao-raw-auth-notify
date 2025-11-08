import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TgacliEntity } from './tGACLI.entity';
import { TgacllEntity } from './tGACLL.entity';
import { TgaclrEntity } from './tGACLR.entity';
import { TgagpcEntity } from './tGAGPC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfgruEntity } from './tGFGRU.entity';
import { TgagarEntity } from './tGAGAR.entity';
import { TprltaEntity } from './tPRLTA.entity';

@Index('PK_TGACLT', ['codclt'], { unique: true })
@Index('TGACLT_I01', ['descrclt'], { unique: true })
@Entity('TGACLT', { schema: 'SANKHYA' })
export class TgacltEntity {
  @Column('int', { primary: true, name: 'CODCLT' })
  codclt: number;

  @Column('char', { name: 'DESCRCLT', length: 40 })
  descrclt: string;

  @Column('char', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('int', { name: 'CLASSIFICACAO' })
  classificacao: number;

  @Column('char', { name: 'SIGLA', nullable: true, length: 10 })
  sigla: string | null;

  @Column('varchar', { name: 'EXIGELIB', length: 1, default: () => "'N'" })
  exigelib: string;

  @Column('varchar', { name: 'TIPOLAUDO', length: 1, default: () => "'I'" })
  tipolaudo: string;

  @Column('varchar', { name: 'CONFNEGADO', length: 1, default: () => "'N'" })
  confnegado: string;

  @Column('varchar', { name: 'TIPOREFPRZVAL', length: 1, default: () => "'F'" })
  tiporefprzval: string;

  @Column('smallint', { name: 'PRAZOVAL', nullable: true })
  prazoval: number | null;

  @OneToMany(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.codclt)
  tcsprjs: TcsprjEntity[];

  @OneToMany(() => TgacliEntity, (tgacliEntity) => tgacliEntity.codclt2)
  tgaclis: TgacliEntity[];

  @OneToMany(() => TgacllEntity, (tgacllEntity) => tgacllEntity.codclt)
  tgaclls: TgacllEntity[];

  @OneToMany(() => TgaclrEntity, (tgaclrEntity) => tgaclrEntity.codclt)
  tgaclrs: TgaclrEntity[];

  @ManyToOne(() => TgagpcEntity, (tgagpcEntity) => tgagpcEntity.tgaclts)
  @JoinColumn([{ name: 'CODGPC', referencedColumnName: 'codgpc' }])
  codgpc: TgagpcEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgaclts)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.tgaclts)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod: TgfgruEntity;

  @OneToMany(() => TgagarEntity, (tgagarEntity) => tgagarEntity.codclt)
  tgagars: TgagarEntity[];

  @OneToMany(() => TprltaEntity, (tprltaEntity) => tprltaEntity.codclt2)
  tprltas: TprltaEntity[];
}
