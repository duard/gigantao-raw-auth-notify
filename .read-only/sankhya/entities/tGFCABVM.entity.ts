import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgffinvmEntity } from './tGFFINVM.entity';

@Index('PK_TGFCABVM', ['nunota'], { unique: true })
@Entity('TGFCABVM', { schema: 'SANKHYA' })
export class TgfcabvmEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('varchar', {
    name: 'CODAUTORIZACAOVENDAMAIS',
    nullable: true,
    length: 100,
  })
  codautorizacaovendamais: string | null;

  @Column('varchar', {
    name: 'CODOPERACAOVENDAMAIS',
    nullable: true,
    length: 100,
  })
  codoperacaovendamais: string | null;

  @Column('char', { name: 'TIPMOV', length: 1, default: () => "'P'" })
  tipmov: string;

  @Column('datetime', { name: 'DHAPROVACAO', nullable: true })
  dhaprovacao: Date | null;

  @Column('datetime', { name: 'DTVALIDADE', nullable: true })
  dtvalidade: Date | null;

  @Column('char', { name: 'ESTORNADO', length: 1, default: () => "'N'" })
  estornado: string;

  @OneToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcabvm, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;

  @OneToMany(() => TgffinvmEntity, (tgffinvmEntity) => tgffinvmEntity.nunota)
  tgffinvms: TgffinvmEntity[];
}
