import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcsnhcEntity } from './tCSNHC.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsigruEntity } from './tSIGRU.entity';

@Index('PK_TGFUNN', ['codunn'], { unique: true })
@Entity('TGFUNN', { schema: 'SANKHYA' })
export class TgfunnEntity {
  @Column('int', { primary: true, name: 'CODUNN' })
  codunn: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @OneToMany(() => TcsnhcEntity, (tcsnhcEntity) => tcsnhcEntity.codunnvendedora)
  tcsnhcs: TcsnhcEntity[];

  @OneToMany(
    () => TcsnhcEntity,
    (tcsnhcEntity) => tcsnhcEntity.codunncompradora,
  )
  tcsnhcs2: TcsnhcEntity[];

  @OneToMany(() => TsicusEntity, (tsicusEntity) => tsicusEntity.codunn)
  tsicuses: TsicusEntity[];

  @OneToMany(() => TsigruEntity, (tsigruEntity) => tsigruEntity.codunn)
  tsigrus: TsigruEntity[];
}
